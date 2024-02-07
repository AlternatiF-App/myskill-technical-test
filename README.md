## Node Version 18.17.0

## Cara Menjalankan

```bash
npm run install
# or
npm run i

command diatas digunakan untuk instal dependency kemudian jalankan command dibawah untuk menjalankan project:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Dalam project ini ada 3 halaman utama, yaitu:
- Landing Page     -> route('/')
- My Portofolio    -> route('/my-portofolio')
- Create           -> route('/create')

## Schema penyimpanan data

Disini saya menggunakan mockAPI untuk menyimpan dan menampilkan data.

## Alur penggunaan website

- User masuk pertama kali di halaman landing page. Dalam landing page user bisa menggunakan tombol pada hero untuk membuat portofolio atau bisa menggunakan navigation di header.
- Halaman My Portofolio, jika user kehalaman ini sebelum membuat portofolionya maka akan muncul pesan agar membuat portofolio terlebih dahulu. Jika user sudah membuat maka disini user bisa melihat portofolio tanpa bisa mengubah data tersebut.
- Halaman Create, disini user bisa membuat portofolionya. Jika user sudah membuat portofolio maka halaman ini akan bisa memperbarui data yang sudah dibuat oleh user tersebut.

Website ini dibuat untuk sekali pakai oleh user karena tidak ada login untuk membedakan user. Jadi jika data pada halaman Create dan My Portofolio sudah ada maka harus dihapus dulu di mockAPI

- endpoint : https://65c2eacef7e6ea59682bc798.mockapi.io/api/portofolio/:id

Jika nantinya data sudah ada bisa dihapus melalui API diatas karena dalam website tidak ada fungsi clear data.

## Desain

Untuk halaman Create beberapa saya ubah untuk penataan card form nya untuk menjadi 1 agar effisien. Kemudian saya juga menambahkan halaman Landing Page dan My Portofolio untuk menambah kesan website yang siap pakai nantinya. Kemudian untuk tombol Simpan dan Tambah Array Portofolio saya ubah. Untuk Simpan saya taruh dibawah karena alur pengisian Form baiknya tombol dibawah untuk kontiniti penggunaan Form, jika diatas user akan keatas lagi untuk menyimpan data tersebut. Kemudian untuk Tambah Array saya taruh diatas seksi portofolio agar berdekatan dengan form portofolio tersebut.
