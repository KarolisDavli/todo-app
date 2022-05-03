const todoItem = () => {
  function Item(title, desc, dueDate, priority, notes) {
    this.title = title
    this.desc = desc
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
  }

  let newItem = new Item('Read a book', '10mins reading', '04.05', 2, 'Read a book for 10mins');

  console.table(newItem);
}

export default todoItem;