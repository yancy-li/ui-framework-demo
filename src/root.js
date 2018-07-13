import i18n from 'i18n/i18n';

export default {
    template: {
        $type: 'splitlayout',
        positionType: 'absoluteFirst',
        position: 200,
        children: [{
                id: 'nav',
                $type: 'listview',
                datas: [{
                        name: i18n.get('index'),
                        tag: 'index'
                    },
                    {
                        name: i18n.get('users'),
                        tag: 'users'
                    },
                    {
                        name: i18n.get('groups'),
                        tag: 'groups'
                    }
                ],
                layoutParams: {
                    region: 'first'
                },
                $listeners: {
                    'clickData': 'changeRoute'
                }
            },
            {
                $isRouter: true, // 路由出口，切换路由时，会替换这个位置的组件
                layoutParams: {
                    region: 'second'
                }
            }
        ]
    },
    handlers: {
        changeRoute: function (e) {
            // 路由跳转
            var data = e.data;
            if (data) {
                if (data.getTag() === 'index') {
                    this.getRouter().show('/');
                } else if (data.getTag() === 'users') {
                    this.getRouter().show('/users/list');
                } else if (data.getTag() === 'groups') {
                    this.getRouter().show('/groups?state=coming soon');
                }
            }
        }
    }
}