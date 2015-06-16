// toDo - add feature for different user roles.
// 1. admin (can edit and delete everything) 2. user (can edit his centenarians; can not delete)
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}