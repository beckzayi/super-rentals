import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
    'Condo',
    'Townhouse',
    'Apartment'
];

export default class RentalRoute extends Route {
    async model(param) {
        const response = await fetch(`/api/rentals/${param.rental_id}.json`);
        const { data } = await response.json();

        const { id, attributes } = data;
        let type;

        if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
            type = 'Community';
        } else {
            type = 'Standalone';
        }
  
        return { id, type, ...attributes };
    }
}