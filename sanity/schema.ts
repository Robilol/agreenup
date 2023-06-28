import {type SchemaTypeDefinition} from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        {
            name: 'header',
            type: 'document',
            title: 'Header',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Titre'
                },
                {
                    name: 'subtitle',
                    type: 'string',
                    title: 'Sous-titre'
                },
                {
                    name: 'cta',
                    type: 'string',
                    title: 'Bouton'
                },
                {
                    name: 'image1',
                    type: 'image',
                    title: 'Image 1'
                },
                {
                    name: 'image2',
                    type: 'image',
                    title: 'Image 2'
                }
            ]
        },
        {
            name: 'bloc',
            type: 'document',
            title: 'Bloc',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Titre'
                },
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image'
                },
                {
                    name: 'bloc1',
                    type: 'array',
                    of: [{type: 'block'}],
                    title: 'Bloc 1'
                }, {
                    name: 'bloc2',
                    type: 'array',
                    of: [{type: 'block'}],
                    title: 'Bloc 2'
                }, {
                    name: 'bloc3',
                    type: 'array',
                    of: [{type: 'block'}],
                    title: 'Bloc 3'
                },
            ]
        },
        {
            name: 'iam',
            type: 'document',
            title: 'A propos',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Titre'
                },
                {
                    name: 'subtitle',
                    type: 'string',
                    title: 'Sous-titre'
                },
                {
                    name: 'cta',
                    type: 'string',
                    title: 'Bouton'
                },
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image'
                },
            ]
        },
        {
            name: 'formation',
            type: 'document',
            title: 'Formations',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Titre'
                },
                {
                    name: 'info',
                    type: 'string',
                    title: 'Info'
                },
                {
                    name: 'formation1title',
                    type: 'string',
                    title: 'Formation 1 title'
                },
                {
                    name: 'formation1price',
                    type: 'string',
                    title: 'Formation 1 prix'
                },
                {
                    name: 'formation1subtitle',
                    type: 'string',
                    title: 'Formation 1 sous titre'
                },
                {
                    name: 'formation1desc',
                    type: 'array',
                    of: [{type: 'block'}],
                    title: 'Formation 1 description'
                },
                {
                    name: 'formation2title',
                    type: 'string',
                    title: 'Formation 2 title'
                },
                {
                    name: 'formation2price',
                    type: 'string',
                    title: 'Formation 2 prix'
                },
                {
                    name: 'formation2subtitle',
                    type: 'string',
                    title: 'Formation 2 sous titre'
                },
                {
                    name: 'formation2desc',
                    type: 'array',
                    of: [{type: 'block'}],
                    title: 'Formation 2 description'
                },
                {
                    name: 'formationcta',
                    type: 'string',
                    title: 'Formations bouton'
                },
                {
                    name: 'formationcustomtitle',
                    type: 'string',
                    title: 'Formation sur mesure titre'
                },
                {
                    name: 'formationcustomsubtitle',
                    type: 'string',
                    title: 'Formation sur mesure sous titre'
                },
                {
                    name: 'formationcustomdesc',
                    type: 'array',
                    of: [{type: 'block'}],
                    title: 'Formation sur mesure description'
                },
                {
                    name: 'formationcustomcta',
                    type: 'string',
                    title: 'Formations sur mesure bouton'
                },
            ]
        },
        {
            name: 'aboutmodal',
            type: 'document',
            title: 'Modal a propos',
            fields: [
                {
                    name: 'modaltitle',
                    type: 'string',
                    title: 'Titre modal'
                },
            ]
        }
    ],
}
