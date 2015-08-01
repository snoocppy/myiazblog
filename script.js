VK.init({
    apiId: 5005065 // ID вашего приложения VK
});

var membersGroups = []; // массив участников группы
getMembers(20629724);

// получаем информацию о группе и её участников
function getMembers(group_id) {
	VK.Api.call('groups.getById', {group_id: group_id, fields: 'photo_50,members_count', v: '5.27'}, function(r) {
			if(r.response) {
				$('.group_info')
				.html('<img src="' + r.response[0].photo_50 + '"/><br/>' 
					+ r.response[0].name
					+ '<br/>Участников: ' + r.response[0].members_count);
				// получем участников группы и пишем в массив membersGroups
				getMembers20k(group_id, r.response[0].members_count);
			}
	});
}

VK.Api.call('users.get', {user_ids: 9603011}, function(r) {
  if(r.response) {
   console.log('Привет, ' + r.response[0].first_name);
  }
}); 