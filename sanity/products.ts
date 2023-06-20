export const products={
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title'
            }
        }
    ]
}