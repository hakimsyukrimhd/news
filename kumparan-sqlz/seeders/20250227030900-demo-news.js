"use strict";
const slugify = require("slugify");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    const news = [
      {
        title: "Nusron Tindak Kepala Seksi Pengukuran Terkait SHGB Pagar Laut Tangerang",
        body: "Kementerian ATR/BPN memeriksa Kepala Seksi Pengukuran yang terlibat dalam terbitnya Sertifikat Hak Guna Bangunan (HGB) di pagar laut Tangerang. Total ada 266 HGB. 266 HGB itu dimiliki beberapa korporasi dan perseorangan yakni PT Intan Agung Makmur, PT Cahaya Inti Sentosa dan 9 bidang atas nama perseorangan.  Menurut Nusron, pengukuran tanah dilakukan oleh pihak swasta yang terdaftar sebagai Kantor Jasa Survei Berlisensi (KKSB). Namun, hasil pengukuran tersebut harus mendapatkan pengesahan dari Kepala Seksi Pengukuran di kantor ATR/BPN setempat. Akan tetapi, siapa Kepala Seksi Pengukuran yang dimaksud, Nusron belum membeberkan identitasnya.Yang melakukan proses pengukuran namanya KJSB. Kantor Jasa Survei Berlisensi. Berarti itu pihak swasta yang mengukur,” kata Nusron usai operasi besar pembongkaran pagar laut di pos TNI Tanjung Pasir, Tangerang, pada Rabu (22/1). “Tapi hasilnya harus disahkan oleh Kepala Seksi Pengukuran di Kepala Kantor Setempat. Jadi yang mengukur itu. Nah terus, Kepala Seksi Pengukurannya, itu yang saya tindak,” tambah Nurson.",
        imageUrl: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01jhm44s3371jzpr68dfdc28x6.jpg",
        UserId: 1,
        CategoryId: 1,
        TagId: 1,
        slug: slugify("Nusron Tindak Kepala Seksi Pengukuran Terkait SHGB Pagar Laut Tangerang", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Profil Widiyanti Putri Wardhana, Menteri Pariwisata yang Punya Harta Rp 54 T",
        body: "Kementerian ATR/BPN memeriksa Kepala Seksi Pengukuran yang terlibat dalam terbitnya Sertifikat Hak Guna Bangunan (HGB) di pagar laut Tangerang. Total ada 266 HGB. 266 HGB itu dimiliki beberapa korporasi dan perseorangan yakni PT Intan Agung Makmur, PT Cahaya Inti Sentosa dan 9 bidang atas nama perseorangan.  Menurut Nusron, pengukuran tanah dilakukan oleh pihak swasta yang terdaftar sebagai Kantor Jasa Survei Berlisensi (KKSB). Namun, hasil pengukuran tersebut harus mendapatkan pengesahan dari Kepala Seksi Pengukuran di kantor ATR/BPN setempat. Akan tetapi, siapa Kepala Seksi Pengukuran yang dimaksud, Nusron belum membeberkan identitasnya.Yang melakukan proses pengukuran namanya KJSB. Kantor Jasa Survei Berlisensi. Berarti itu pihak swasta yang mengukur,” kata Nusron usai operasi besar pembongkaran pagar laut di pos TNI Tanjung Pasir, Tangerang, pada Rabu (22/1). “Tapi hasilnya harus disahkan oleh Kepala Seksi Pengukuran di Kepala Kantor Setempat. Jadi yang mengukur itu. Nah terus, Kepala Seksi Pengukurannya, itu yang saya tindak,” tambah Nurson.",
        imageUrl: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01jhm44s3371jzpr68dfdc28x6.jpg",
        UserId: 1,
        CategoryId: 1,
        TagId: 1,
        slug: slugify("Profil Widiyanti Putri Wardhana, Menteri Pariwisata yang Punya Harta Rp 54 T", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Prabowo Menjanjikan Indonesia Emas 2045",
        body: "Kementerian ATR/BPN memeriksa Kepala Seksi Pengukuran yang terlibat dalam terbitnya Sertifikat Hak Guna Bangunan (HGB) di pagar laut Tangerang. Total ada 266 HGB. 266 HGB itu dimiliki beberapa korporasi dan perseorangan yakni PT Intan Agung Makmur, PT Cahaya Inti Sentosa dan 9 bidang atas nama perseorangan.  Menurut Nusron, pengukuran tanah dilakukan oleh pihak swasta yang terdaftar sebagai Kantor Jasa Survei Berlisensi (KKSB). Namun, hasil pengukuran tersebut harus mendapatkan pengesahan dari Kepala Seksi Pengukuran di kantor ATR/BPN setempat. Akan tetapi, siapa Kepala Seksi Pengukuran yang dimaksud, Nusron belum membeberkan identitasnya.Yang melakukan proses pengukuran namanya KJSB. Kantor Jasa Survei Berlisensi. Berarti itu pihak swasta yang mengukur,” kata Nusron usai operasi besar pembongkaran pagar laut di pos TNI Tanjung Pasir, Tangerang, pada Rabu (22/1). “Tapi hasilnya harus disahkan oleh Kepala Seksi Pengukuran di Kepala Kantor Setempat. Jadi yang mengukur itu. Nah terus, Kepala Seksi Pengukurannya, itu yang saya tindak,” tambah Nurson.",
        imageUrl: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01jhm44s3371jzpr68dfdc28x6.jpg",
        UserId: 1,
        CategoryId: 1,
        TagId: 1,
        slug: slugify("Prabowo Menjanjikan Indonesia Emas 2045", { lower: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("News", news, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("News", null, {});
  },
};
