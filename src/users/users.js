import handlers from './handlers';
import i18n from 'i18n/i18n';

export default {
    template: {
        $type: 'borderlayout',
        splitterVisible: false,
        children: [{
                $type: 'hboxlayout',
                layoutParams: {
                    region: 'top'
                },
                children: [{
                        $type: 'label',
                        text: i18n.get('userName'),
                        layoutParams: {
                            vAlign: 'middle'
                        }
                    },
                    {
                        $type: 'textfield',
                        id: 'search-name',
                        layoutParams: {
                            vAlign: 'middle'
                        }
                    },
                    {
                        $type: 'button',
                        icon: 'imgs/search.json',
                        text: i18n.get('search'),
                        $listeners: {
                            'click': 'search'
                        }
                    }
                ]
            },
            {
                $isRouter: true,
                layoutParams: {
                    region: 'center'
                }
            }
        ]
    },
    handlers: handlers
}