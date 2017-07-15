import {
    AngularmService,
    ListingTableComponent,
    EntityLineComponent,
    CreateEntityComponent,
    FormLineComponent,
    EntityDetailsComponent,
    ShowLineComponent,
    EditEntityFormComponent,
    EditFormLineComponent,
} from 'angularm';

import { CustomListingTableComponent } from 'app/custom-listing-table.component';

export let defineRules = (angularm: AngularmService) => {
    angularm
        .detr('list_entities', CustomListingTableComponent) //Through the port will be passed an entity
        .der('table_line', EntityLineComponent)
        .detr('create_form', CreateEntityComponent)
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .der('show_entity', EntityDetailsComponent)
        .dpr('show_line', ShowLineComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', '* ', 'number', EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};