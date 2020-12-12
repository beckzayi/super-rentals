import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
    'Condo',
    'Townhouse',
    'Apartment'
];

export default class IndexRoute extends Route {
    async model() {
        // return {
        //     title: 'Grand Old Mansion',
        //     owner: 'Veruca Salt',
        //     city: 'San Francisco',
        //     location: {
        //         lat: 37.7749,
        //         lng: -122.4194,
        //     },
        //     category: 'Estate',
        //     type: 'Standalone',
        //     bedrooms: 15,
        //     image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        //     description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        // };
        const response = await fetch('/api/rentals.json');
        const { data } = await response.json();
        
        return data.map(model => {
            let { id, attributes } = model;
            let type;
      
            if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
                type = 'Community';
            } else {
                type = 'Standalone';
            }
      
            return { id, type, ...attributes };
        });
    }
}