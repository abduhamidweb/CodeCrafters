import methods from '../controllers/contact_us.js';
import express from 'express';
import adminChecker from '../middleware/admin.checker.js';
const { GET_CONTACTUS, POST_CONTACTUS, PUT_CONTACTUS, DELETE_CONTACTUS } = methods;
const contact_us = express();
contact_us.get('/contacts', adminChecker, GET_CONTACTUS);
contact_us.get('/contacts/:id', adminChecker, GET_CONTACTUS);
contact_us.post('/contacts', POST_CONTACTUS);
contact_us.put('/contacts/:id', adminChecker, PUT_CONTACTUS);
contact_us.delete('/contacts/:id', adminChecker, DELETE_CONTACTUS);
export { contact_us };
