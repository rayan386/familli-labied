// ====== بيانات مخزنة في localStorage ======
// إذا لا توجد بيانات نهيئها
if(!localStorage.getItem('familyData')){
    localStorage.setItem('familyData', JSON.stringify({
        users: {
            "admin": {password:"admin123", fullname:"الأدمن", role:"أدمن", photo:"", bio:""}
        }
    }));
}

// جلب البيانات
function getData(){
    return JSON.parse(localStorage.getItem('familyData'));
}

// حفظ البيانات
function saveData(data){
    localStorage.setItem('familyData', JSON.stringify(data));
}

// تسجيل الدخول
function authLogin(username,password){
    const data = getData();
    if(data.users[username] && data.users[username].password===password){
        localStorage.setItem('currentUser', username);
        return true;
    }
    return false;
}

// تسجيل الخروج
function logout(){
    localStorage.removeItem('currentUser');
    window.location.href='index.html';
}

// الحصول على المستخدم الحالي
function currentUser(){
    const user = localStorage.getItem('currentUser');
    if(!user) return null;
    const data = getData();
    return data.users[user];
}

// إنشاء مستخدم جديد (من الأدمن)
function createUser(username,password,fullname,role,bio,photo){
    const data = getData();
    if(data.users[username]) return false; // موجود
    data.users[username]={password,fullname,role,bio,photo};
    saveData(data);
    return true;
}

// جلب كل المستخدمين
function getAllUsers(){
    return Object.entries(getData().users).map(([username, info])=>{
        return {...info, username};
    });
}

