document.getElementById('khodamForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput');
    const resultDiv = document.getElementById('result');

    // Data khodam yang di-hardcode
    const khodamData = [
        'Khodam Api',
        'Khodam Air',
        'Khodam Angin',
        'Khodam Bumi',
        'Khodam Cahaya',
        'Khodam Kegelapan',
        'Khodam Petir',
        'Khodam Hutan',
        'Khodam Laut',
        'Khodam Gunung',
        'Khodam Langit',
        'Khodam Batu',
        'Khodam Matahari',
        'Khodam Bulan',
        'Khodam Bintang',
        'Khodam Seblak',
        'Khodam Pecel',
        'Khodam Caper',
        'Khodam Mie Ayam',
        'Khodam Ganteng',
        'Khodam Bakwan'
    ];

    // Fungsi untuk mendapatkan khodam secara acak
    function getRandomKhodam() {
        const randomIndex = Math.floor(Math.random() * khodamData.length);
        return khodamData[randomIndex];
    }

    const name = nameInput.value.trim();
    const khodam = getRandomKhodam();

    // Tampilkan hasil
    resultDiv.classList.remove('d-none', 'alert-danger', 'alert-success');
    resultDiv.classList.add('alert-success');
    resultDiv.textContent = `Nama : ${name}, Terdapat : ${khodam}`;

    // Reset input nama setelah tombol diklik
    nameInput.value = '';
});
