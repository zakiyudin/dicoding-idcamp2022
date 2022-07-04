const { v4: uuidv4 } = require('uuid');
const notes = require('./notes');

const addNotes = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = uuidv4();
  console.log(id);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan Berhasil Ditambahkan',
      data: {
        noteId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan Gagal Ditambahkan',
  });

  response.code(500);
  return response;
};

const getAllNotes = () => ({
  status: 'success',
  data: notes,
});

const getNoteById = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });

  response.code(404);
  return response;
};

const editNoteById = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toString();

  const index = notes.findIndex((n) => n.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'catatan berhasil diedit',
      data: {
        notes,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Gagal edit catatan',
  });
  response.code(400);
  return response;
};

const deleteNoteById = (request, h) => {
  const { id } = request.params;

  const note = notes.findIndex((n) => n.id === id);

  if (note !== -1) {
    notes.splice(note, 1);
    const response = h.response({
      status: 'success',
      message: 'Data berhasil dihapus',
    });
    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Data gagal dihapus',
  });

  response.code(400);
  return response;
};

module.exports = {
  addNotes,
  getAllNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
};
