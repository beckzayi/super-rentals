import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const COMMUNITY_CATEGORIES = [
    'Condo',
    'Townhouse',
    'Apartment'
];

export default class IndexRoute extends Route {
    @service store;
    
    async model() {
        return this.store.findAll('rental');
    }
}