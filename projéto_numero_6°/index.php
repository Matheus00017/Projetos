<?php
include("conexao.php");

$sql = "SELECT id, nome FROM categorias ORDER BY nome";
$resultCategorias = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>ReplayShow</title>
    <link rel="shortcut icon" href="img/hogwarts.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>ReplayShow</h1>
</header>

<div class="sobre">
    <h2>O que é?</h2>
    <p>
        Esse site tem como principal objetivo relembrar os programas,
        jogos e seriados que marcaram os anos 90 e 2000.
    </p>
</div>

<ul class="categorias">
<?php if ($resultCategorias->num_rows > 0): ?>
    <?php while ($cat = $resultCategorias->fetch_assoc()): ?>
        <li>
            <a href="replayshow.php?categoria=<?= urlencode($cat['nome']) ?>">
                <div class="categoria">
                    <h2><?= htmlspecialchars($cat['nome']) ?></h2>
                </div>
            </a>
        </li>
    <?php endwhile; ?>
<?php else: ?>
    <li>Nenhuma categoria cadastrada.</li>
<?php endif; ?>
</ul>

</body>
</html>
