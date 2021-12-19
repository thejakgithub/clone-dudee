<template>
  <div class="h-[90rem] bg-white">
    <div class="bg-header-contact bg-cover h-[490px]">
      <div class="bg-black/40 h-[490px]">
        <main class="mx-auto xl:max-w-7xl lg:max-w-5xl font-maven-pro">
          <div class="lg:px-12 px-4">
            <h1 class="text-7xl text-white pt-48 mx-3">Our Story</h1>
            <div class="bg-white h-96 rounded-lg mt-2 p-4 font-asap">
              <p class="text-[20px]">
                บริษัท ดูดีอินดีด คอร์ปอเรชั่น รับพัฒนาเว็บไซต์ ซอฟต์แวร์
                แอพพลิเคชั่น และมี Inhouse Products ของตัวเอง เราไม่ใช่ Software
                House เราเป็น Consulting and Technology Solutions
                เพราะเรามีความเชื่อว่าเทคโนโลยีเข้ามาช่วยแก้ปัญหาทางธุรกิจ
                เทคโนโลยีถูกนำมาใช้เสริมสร้างประสิทธิภาพการดำเนินงานของแต่ละกิจกรรมตามหน้าที่ทางธุรกิจ
                เช่น การเงิน การตลาด การดำเนินงาน บริหารทรัพยากรบุคคล
                เพื่อเป้าหมายเดียวคือ “รักษาความสามารถในการแข่งขัน (Competitive
                Ability)”
              </p>
              <div class="flex justify-between py-10">
                <img
                  src="../assets/img/about_p1.jpeg"
                  alt="about_p1"
                  class="w-[30%]"
                />
                <img
                  src="../assets/img/about_p2.jpeg"
                  alt="about_p2"
                  class="w-[30%]"
                />
                <img
                  src="../assets/img/about_p3.jpeg"
                  alt="about_p3"
                  class="w-[30%]"
                />
              </div>
              <div>
                <h1 class="font-maven-pro text-7xl mt-8 mb-4">Vision</h1>
                <p class="text-[20px]">
                  วิสัยทัศน์ของเราคือการเป็นผู้นำด้านการประยุกต์ใช้เทคโนโลยีเพื่อแก้ไขปัญหาและเพิ่มผลผลิตในทุกภาคธุรกิจของเอเชียตะวันออกเฉียงใต้
                  เราทำงานด้วยความมุ่งมั่นและขับเคลื่อนธุรกิจของลูกค้าของเราเหมือนพันธมิตรที่เราเชื่อว่าจะเติบโตไปด้วยกัน
                  การแก้ปัญหาทางธุรกิจต้องเริ่มจากการเป็นผู้ฟังที่ดีและเข้าใจปัญหาที่แท้จริง
                  เราเข้าใจกระบวนการของผู้ใช้งาน
                  เราจึงสร้างสรรค์และพัฒนางานของเราอย่างมีประสิทธิภาพและนำไปปฏิบัติได้จริง
                </p>
              </div>
              <div class="font-maven-pro">
                <h1 class="text-7xl mt-[4.5rem] mb-4">Member</h1>
                <div>
                  <h2 class="text-5xl mt-16">Board</h2>
                </div>
                <hr class="my-10" />
                <div>
                  <h2 class="text-5xl mt-16">Employees</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import OurService from "../components/OurService.vue";
export default {
  name: "AboutUs",
  components: {
    OurService,
  },
};
</script>

<style>
</style>