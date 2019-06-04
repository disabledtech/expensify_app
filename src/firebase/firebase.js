import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //Child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('removed', snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('changed', snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('added', snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });

//     console.log(expenses);
//   });


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(expenses);
//   });

// const expenses = [{
//     name: 'rent',
//     amount: 100,
//     note: '',
//     createdAt: 0
// }, {
//     name: 'gum',
//     amount: 10021,
//     note: 'minty',
//     createdAt: 2000
// }, {
//     name: 'car',
//     amount: 10220,
//     note: '',
//     createdAt: 9000
// }]

// expenses.map((expense) => database.ref('expenses').push(expense));

// database.ref('notes/-LgKNf5eK-8-uDsM90id').update({
//     note: '2'
// });

// database.ref('notes').push({
//     title: 'todo 2',
//     note: 'pay rent'
// });

// const firebaseNotes = {
//     notes: {
//         12: {
//             title: 'note 1',
//             note: 'my data'
//         },
//         25: {
//             title: 'note2',
//             note: 'note data'
//         }
//     }
// }

// const notes = [{
//     id: 12,
//     title: 'titleeeeee',
//     note: 'noteeeeeeee'
// }, {
//     id: 13,
//     title: 'treeeeeeee',
//     note: 'wwwwwwwwweeeeee'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const {name, job: {title}, job: {company}} = snapshot.val();
//     console.log(`${name} is a ${title} at ${company}.`);
// });
// setTimeout(() => {
//     database.ref('job/company').set('Microsoft');

// }, 2000);

// database.ref()
//     .once('value')
//     .then((snapshot)=> {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error fetching data.', e)
//   });

// setTimeout(() => {
//     database.ref('age').set(22);
// }, 3000);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(23);
// }, 10000);

// database.ref().set({
//     name: 'Taylor Danielson',
//     age: 24,
//     stress: 2,
//     job: {
//         title: 'Software Guy',
//         company: 'NASA'
//     },
//     location: {
//         city: "Surrey",
//         country: "Canada"
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Something went wrong.', e);
// });

// database.ref().update({
//     stress: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('attributes').remove();