import userModelService from 'model-service/user'

export default {
    search: function () {
        var self = this,
            component = self.getComponent(),
            table = component.findViewById('table', true),
            searchName = component.findViewById('search-name', true).getValue();
        
        userModelService.find(searchName).then(function(users) {
            table.setDatas(users);
        });
    }
}