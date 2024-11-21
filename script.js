// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih, pesan Anda telah dikirim!');
});


// Data pemeriksaan kesehatan
const healthChecks = [
    { no: 1, jenis: "Pemeriksaan Umum", deskripsi: "Pemeriksaan dasar kesehatan tubuh.", harga: "Rp 150.000" },
    { no: 2, jenis: "Tes Darah Lengkap", deskripsi: "Analisis komponen darah untuk mendeteksi penyakit.", harga: "Rp 250.000" },
    { no: 3, jenis: "Cek Kolesterol", deskripsi: "Mengukur kadar kolesterol dalam tubuh.", harga: "Rp 200.000" },
    { no: 4, jenis: "Tes Diabetes", deskripsi: "Mengukur kadar gula dalam darah.", harga: "Rp 180.000" },
    { no: 5, jenis: "Pemeriksaan Jantung", deskripsi: "Tes kesehatan untuk mendeteksi masalah jantung.", harga: "Rp 500.000" },
];

// Memuat data ke dalam tabel
const healthCheckList = document.getElementById("healthCheckList");
healthChecks.forEach(check => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${check.no}</td>
        <td>${check.jenis}</td>
        <td>${check.deskripsi}</td>
        <td>${check.harga}</td>
        <td><button class="btn btn-primary btn-sm" onclick="register('${check.jenis}')">Daftar</button></td>
    `;
    healthCheckList.appendChild(row);
});

// Fungsi untuk daftar pemeriksaan
function register(jenis) {
    alert(`Anda telah memilih ${jenis}. Kami akan menghubungi Anda segera!`);
}

// Form submission handler
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form reload halaman

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    // Menampilkan konfirmasi
    alert(`Terima kasih, ${fullName}!\nAnda telah mendaftar untuk ${service}.\nKami akan menghubungi Anda di ${email} atau ${phone}.`);
    
    // Reset form
    this.reset();
});

