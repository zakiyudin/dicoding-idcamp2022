const {
  addNotes,
  getAllNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotes,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotes,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteById,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteById,
  },
  {
    method: 'DeLETE',
    path: '/notes/{id}',
    handler: deleteNoteById,
  },
];

module.exports = routes;
