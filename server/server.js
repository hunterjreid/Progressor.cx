const express = require('express');
const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK with your service account credentials
const serviceAccount = require('path/to/your/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com'
});

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server connected to Firebase!');
});

// Define a route to get data from Firebase
app.get('/api/data/:key', (req, res) => {
  const key = req.params.key;

  const db = admin.database();
  const ref = db.ref(`data/${key}`);

  ref.once('value', (snapshot) => {
    const data = snapshot.val();
    res.status(200).json(data);
  }).catch((error) => {
    res.status(500).json({ error: 'Error fetching data from Firebase.' });
  });
});

// Define a route to post data to Firebase
app.post('/api/data', (req, res) => {
  const newData = req.body;

  const db = admin.database();
  const ref = db.ref('data');

  ref.push(newData)
    .then(() => {
      res.status(201).json({ message: 'Data added to Firebase.' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error adding data to Firebase.' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
