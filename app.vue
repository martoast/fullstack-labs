<template>
  <div>
    <header>
      <h1>FullStack Labs</h1>
      <nav>
        <ul>
          <li><NuxtLink to="#about">About Us</NuxtLink></li>
          <li><NuxtLink to="#services">Our Services</NuxtLink></li>
          <li><NuxtLink to="#contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>About FullStack Labs</h2>
        <p>FullStack Labs is a premier software development and consulting firm, dedicated to delivering cutting-edge solutions for businesses of all sizes. With our team of experienced developers, designers, and consultants, we transform ideas into powerful, scalable applications that drive growth and efficiency.</p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li v-for="service in services" :key="service">{{ service }}</li>
        </ul>
      </section>

      <section id="expertise">
        <h2>Our Expertise</h2>
        <p>At FullStack Labs, we specialize in a wide range of technologies and frameworks, including but not limited to:</p>
        <ul>
          <li v-for="tech in technologies" :key="tech">{{ tech }}</li>
        </ul>
      </section>

      <section id="process">
        <h2>Our Process</h2>
        <ol>
          <li v-for="(step, index) in process" :key="index">{{ step }}</li>
        </ol>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Ready to bring your software vision to life? Get in touch with FullStack Labs today!</p>
        <ul>
          <li>Email: {{ contactEmail }}</li>
          <li>Phone: {{ contactPhone }}</li>
          <li>Address: {{ contactAddress }}</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; {{ new Date().getFullYear() }} FullStack Labs. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  'Custom Software Development',
  'Web Application Development',
  'Mobile App Development (iOS & Android)',
  'Cloud Solutions & Migration',
  'DevOps & CI/CD Implementation',
  'UI/UX Design',
  'Software Architecture Consulting',
  'Agile Project Management',
  'Quality Assurance & Testing',
  'Maintenance & Support'
])

const technologies = ref([
  'JavaScript (React, Vue.js, Angular, Node.js)',
  'Python (Django, Flask)',
  'Ruby on Rails',
  'Java & Kotlin',
  'Swift & Objective-C',
  'C# & .NET',
  'SQL & NoSQL Databases',
  'AWS, Azure, & Google Cloud Platform',
  'Docker & Kubernetes',
  'Blockchain & Smart Contracts'
])

const process = ref([
  'Initial Consultation & Requirements Gathering',
  'Project Planning & Architecture Design',
  'Agile Development Sprints',
  'Continuous Integration & Testing',
  'Client Review & Feedback Integration',
  'Deployment & Launch Support',
  'Ongoing Maintenance & Optimization'
])

const contactEmail = ref('alexmartos96@gmail.com')
const contactPhone = ref('(619) 888-5248')
const contactAddress = ref('2220 Otay Lakes Road, Suite 502 #95, Chula Vista, CA, US, 91915')
</script>