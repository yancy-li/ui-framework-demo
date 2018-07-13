import root from './root.js';
import users from './users/users';
import usersEdit from './users/edit/edit.js';
import usersList from './users/list/list.js';
import groups from './groups/groups';
import home from './home/home';
import i18n from 'i18n/i18n';

var app = new ht.ui.fw.App({
    root: root,
    // 路由规则
    routes: [{
            path: '/',
            fragment: home
        },
        {
            path: '/users',
            fragment: users,
            children: [{
                    path: 'list',
                    fragment: usersList
                },
                {
                    path: 'edit/:id',
                    fragment: usersEdit
                }
            ]
        },
        {
            path: '/groups',
            fragment: groups
        }
    ]
});

app.addToDOM();

var app1 = new ht.ui.fw.App({
    root: {
        template: {
            $type: 'dialog',
            title: i18n.get('selectLanguage'),
            contentView: {
                $type: 'hboxlayout',
                padding: 20,
                children: [
                    {
                        $type: 'button',
                        text: '中文',
                        layoutParams: {
                            marginRight: 20,
                        },
                        $listeners: {
                            'click': 'setLangZh'
                        }
                    },
                    {
                        $type: 'button',
                        text: 'English',
                        $listeners: {
                            'click': 'setLangEn'
                        }
                    }
                ]
            }
        },
        handlers: {
            setLangZh: function() {
                i18n.setLang('zh');
                window.location.reload();
            },
            setLangEn: function() {
                i18n.setLang('en');
                window.location.reload();
            }
        }
    }
});

app1.addToDOM(function(rootView) {
    rootView.show();
});