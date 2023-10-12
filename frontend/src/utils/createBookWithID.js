import { v4 as uuidv4 } from 'uuid';

function createBookWithID(book, source) {
  return { ...book, isFaforite: false, id: uuidv4(), source: source };
}

export default createBookWithID;
