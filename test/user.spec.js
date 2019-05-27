import MockFirebase from 'mock-cloud-firestore';
const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
            idUser: '1',
            name: 'Daiana',
            email: 'daiana@dramafever.com',
            photo: 'abc.jpg',
            birthdate : '12/03/1991',
            infoPersonal:'Correr',
            infoDoramas:'2 Vistos'
        },
        abc456: {
            idUser: '2',
            name: 'Diana',
            email: 'diana@dramafever.com',
            photo: 'abcd.jpg',
            birthdate : '25/10/1995',
            infoPersonal:'Leer',
            infoDoramas:'1 Vistos'
        },
      }
    }
  }
 };
 global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });import {addsetUser, setUser,updateUser} from '../src/controller/controller-firebase.js';

 describe('setUser', () => { 
    it('Deberia ser una funcion:', ()=>{
		expect(typeof setUser).toBe('function')
		});

});
describe('updateUser', () => { 
    it('Deberia ser una funcion:', ()=>{
		expect(typeof updateUser).toBe('function')
		});
		

});