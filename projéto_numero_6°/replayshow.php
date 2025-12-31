<?php
include("conexao.php");

$categoria = $_GET['categoria'] ?? '';

$sql = "
SELECT
    c.titulo,
    c.descricao,
    c.ano_lancamento,
    c.imagem_url,
    cat.nome AS categorias_nome
FROM coonteudos c
JOIN categorias cat ON c.categoria_id = cat.id
WHERE cat.nome = ?    
";

$stmt = $conn->prepara($sql);
$stmt->bind_param("s", $categoria);
$stmt->execute();
$result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($categoria) ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1><?= htmlspecialchars($categoria) ?></h1>

<?php if ($result->num_rows > 0): ?>
    <?php while ($row = $result->fetch_assoc()): ?>
        <div class="card">
            <h3><?= htmlspecialchars($row['titulo']) ?></h3>

            <?php if ($row['ano_lancamento']): ?>
                <p><strong>Ano:</strong> <?= $row['ano_lancamento'] ?></p>
            <?php endif; ?>

            <?php if ($row['imagem_url']): ?>
                <img src="<?= $row['imagem_url'] ?>" alt="<?= htmlspecialchars($row['titulo']) ?>">
            <?php endif; ?>

            <p><?= htmlspecialchars($row['descricao']) ?></p>
        </div>
        <hr>
    <?php endwhile; ?>
<?php else: ?>
    <p>Nenhum conteúdo encontrado para essa categoria.</p>
<?php endif; ?>

<a href="index.html">⬅ Voltar</a>

</body>
</html>