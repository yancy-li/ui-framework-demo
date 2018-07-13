import i18n from 'i18n/i18n'
import userModelService from 'model-service/user.js';

export default {
    template: {
        id: 'table',
        $type: 'tablepane',
        layoutParams: {
            region: 'center'
        },
        columns: [{
                name: 'id',
                displayName: i18n.get('userId')
            },
            {
                name: 'name',
                displayName: i18n.get('userName')
            },
            {
                displayName: '',
                drawCell: function (g, data, selected, column, x, y, width, height, view) {
                    var button = data.button;
                    if (!button) {
                        button = data.button = new ht.ui.Button();
                        button.setText(i18n.get('edit'));
                        button.on('click', function () {
                            ht.ui.fw.App.callHandler(view, 'edit', [data]);
                        });
                    }
                    return button;
                }
            }
        ]
    },
    handlers: {
        $created: function() {
            var self = this;
            userModelService.getUsers().then(function(users) {
                self.getComponent().setDatas(users);
            });
        },
        edit: function (data) {
            this.getRouter().show('/users/edit/' + data.getId());
        }
    }
}