<?php
require_once __DIR__ . '/../src/auth.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $u = $_POST['username'] ?? '';
    $p = $_POST['password'] ?? '';
    if (check_login($u,$p)){
        header('Location: dashboard.php');
        exit;
    } else {
        $error = "اسم المستخدم أو كلمة المرور خاطئة.";
    }
}
?>
<!doctype html>
<html>
<head><meta charset="utf-8"><title>تسجيل الدخول - العائلة</title></head>
<body>
  <h2>تسجيل الدخول</h2>
  <?php if(!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
  <form method="post">
    <label>المستخدم: <input name="username" required></label><br>
    <label>كلمة المرور: <input name="password" type="password" required></label><br>
    <button>دخول</button>
  </form>
</body>
</html>
