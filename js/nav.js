// Navbar dynamisch einfügen
document.getElementById('nav').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="assets/logo.svg" alt="Quiz-App Logo" width="30" height="30" class="d-inline-block align-text-top">
                Quiz-App
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Startseite</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="quiz.html">Quiz</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;