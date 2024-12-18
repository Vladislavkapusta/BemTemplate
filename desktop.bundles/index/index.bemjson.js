({
    block : 'page',
    title : 'index',
    head : [
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'landing'
        },
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    tag: 'a',
                    attrs: { href: '/' },
                    content: {
                        elem: 'button',
                        tag: 'button',
                        content: 'LogoDlyaKrutyh'
                    }
                },
                {
                    block: 'search',
                    mix : { block : 'indexx', elem : 'search' },
                    content: [
                        {
                            elem: 'input',
                            tag: 'input',
                            attrs: { type: 'text', placeholder: 'Поиск...' }
                        },
                        {
                            elem: 'button',
                            tag: 'button',
                            mods : {theme : 'islands', size : 'm', type : 'submit'},
                            content: 'Найти'
                        }
                    ]
                },
                {
                    block: 'phone',
                    content: {
                        tag: 'a',
                        attrs: { href: 'tel:+1234567890' },
                        content: '+1 (234) 567-890'
                    }
                }
            ]
        },
        {
            block: 'menu',
            content: [
                { elem: 'item', content: 'Главная' },
                { elem: 'item', content: 'О нас' },
                { elem: 'item', content: 'Контакты' }
            ]
        },
        {
            block: 'banner',
            content: [
                { elem: 'item', content: 'Шапка-реклама' },
            ]
        },
        {
            block: 'main',
            content: [
                {
                    block: 'sidebar',
                    content: [
                        { elem: 'title', content: 'Категории' },
                        { elem: 'list', content: [
                            { elem: 'item', content: 'Новости' },
                            { elem: 'item', content: 'Обзоры' },
                            { elem: 'item', content: 'Статьи' }
                        ]}
                    ]
                },
                {
                    block: 'content',
                    content: 'Здесь размещается основное содержимое страницы.'
                }
            ]
        },
        {
            block: 'footer',
            content: '© 2024 Мой сайт. Защищенных прав нет.'
        }
    ]
})