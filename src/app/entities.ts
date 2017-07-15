import { AngularmService, memoryDAO, entityType } from 'angularm';

export let describeDomain = (angularm: AngularmService) => {
    angularm.setupDomain(
        memoryDAO(
            entityType('book', 'books', { id: 'name' })
                .propertyType('name', 'string')
                .propertyType('author', 'string')
        ),
        memoryDAO(
            entityType('car', 'cars', { id: 'name' })
                .propertyType('name', 'string')
                .propertyType('price', 'number')
        ),
        memoryDAO(
            entityType('vendor', 'vendors', { id: 'name' })
                .propertyType('name', 'string')
                .propertyType('country', 'string')
        )
    );
};


