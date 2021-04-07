export const folders = [
  {
    name: 'Folder 1',
    type: 'folder',
    children: [
      {
        name: 'Folder 1.1',
        type: 'folder',
        children: [
          { name: 'File 1.1.1', type: 'file', extension: 'pdf' },
          { name: 'File 1.1.2', type: 'file', extension: 'jpg' },
          { name: 'File 1.1.3', type: 'file', extension: 'pdf' },
        ],
      },
      {
        name: 'Folder 1.2',
        type: 'folder',
        children: [
          { name: 'File 1.2.1', type: 'file', extension: 'txt' },
          { name: 'File 1.2.2', type: 'file', extension: 'png' },
          { name: 'File 1.2.3', type: 'file', extension: 'pdf' },
        ],
      },
    ],
  },
  {
    name: 'Folder 2',
    type: 'folder',
    children: [
      {
        name: 'Folder 2.1',
        type: 'folder',
        children: [
          { name: 'File 2.1.1', type: 'file', extension: 'pdf' },
          { name: 'File 2.1.2', type: 'file', extension: 'png' },
          { name: 'File 2.1.3', type: 'file', extension: 'pdf' },
        ],
      },
      { name: 'File 2.2', type: 'file', extension: 'pdf' },
      { name: 'File 2.3', type: 'file', extension: 'txt' },
    ],
  },
  {
    name: 'Folder 3',
    type: 'folder',
    children: [
      { name: 'File 3.1', type: 'file', extension: 'txt' },
      { name: 'Folder 3.2', type: 'folder', children: [] },
      {
        name: 'Folder 3.3',
        type: 'folder',
        children: [
          { name: 'File 3.3.1', type: 'file', extension: 'txt' },
          { name: 'File 3.3.2', type: 'file', extension: 'pdf' },
          { name: 'File 3.3.3', type: 'file', extension: 'jpg' },
        ],
      },
    ],
  },
];
