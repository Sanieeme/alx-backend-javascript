// 3-all.js

import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    try {
        // Using Promise.all to execute both promises concurrently
        const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
        console.log(`body ${user.firstName} ${user.lastName}`);
    } catch (error) {
        console.error('Signup system offline');
    }
}
