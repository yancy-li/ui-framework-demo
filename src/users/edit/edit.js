import i18n from 'i18n/i18n.js';
import userModelService from 'model-service/user';

export default {
    data: {
        id: null,
        name: null
    },
    template: {
        $type: 'tablelayout',
        $form: true,
        columnWidthMap: {
            0: {
                preferredWidth: 100,
                weight: 0.1,
            },
            1: {
                preferredWidth: 100,
                weight: 0.1,
            }
        },
        children: [{
                $type: 'tablerow',
                weight: 0,
                children: [{
                        $type: 'label',
                        'text': i18n.get('userId')
                    },
                    {
                        $type: 'textfield',
                        formDataName: 'id',
                        readOnly: true,
                        value: '{query.id}'
                    }
                ]
            },
            {
                $type: 'tablerow',
                weight: 0,
                children: [{
                        $type: 'label',
                        'text': i18n.get('userName')
                    },
                    {
                        $type: 'textfield',
                        formDataName: 'name',
                        value: '{{query.name}}'
                    }
                ]
            },
            {
                $type: 'tablerow',
                weight: 0,
                children: [{
                    $type: 'button',
                    'text': i18n.get('save'),
                    layoutParams: {
                        colspan: 2
                    },
                    $listeners: {
                        click: 'save'
                    }
                }]
            }
        ]
    },
    handlers: {
        $created: function () {
            var self = this;
            userModelService.getUser(self.getParams().id).then(function(user) {
                var data = self.getData();
                data.id = user.id;
                data.name = user.name;
            });
        },
        save: function () {
            var self = this;
            var id = self.getData().id;
            var name= self.getData().name;
            userModelService.update(id, name).then(function(){
                self.getRouter().show('/users/list');
            });
        }
    }
}