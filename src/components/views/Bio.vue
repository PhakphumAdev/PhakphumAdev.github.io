<template>
  <div>
    <img class="self" src="@/assets/Biography/self.jpeg" />
    <h2 class="header">Phakphum Artkaew (ภาคภูมิ อาจแก้ว)</h2>
    <h4 class="subtitle" style="padding-bottom: 10px">
      1st year master’s student in computer engineering at NYU Tandon
    </h4>
    <h4 class="subtitle">Brooklyn, NY 📍</h4>
    <div class="badge-grid">
      <img
        class="badge"
        alt="C/C++"
        src="https://img.shields.io/badge/-C%2FC%2B%2B-red"
      />
      <img
        class="badge"
        alt="Python"
        src="https://img.shields.io/badge/-Python-blue"
      />
      <img
        class="badge"
        alt="Java"
        src="https://img.shields.io/badge/-Java-orange"
      />
      <img
        class="badge"
        alt="JavaScript"
        src="https://img.shields.io/badge/-Javascript-yellow"
      />
      <img
        class="badge"
        alt="Scala"
        src="https://img.shields.io/badge/-Scala-maroon"
      />
      <img
        class="badge"
        alt="SQL"
        src="https://img.shields.io/badge/-SQL-lightgrey"
      />
      <img
        class="badge"
        alt="Git"
        src="https://img.shields.io/badge/-Git-critical"
      />
      <img
        class="badge"
        alt="Couchbase"
        src="https://img.shields.io/badge/-Couchbase-crimson"
      />
      <img
        class="badge"
        alt="Kafka"
        src="https://img.shields.io/badge/-Kafka-blueviolet"
      />
      <img
        class="badge"
        alt="HTML/CSS"
        src="https://img.shields.io/badge/-HTML%2FCSS-yellowgreen"
      />
      <img
        class="badge"
        alt="Swift"
        src="https://img.shields.io/badge/-Swift-3e8bc3"
      />
      <img
        class="badge"
        alt="Vue.js"
        src="https://img.shields.io/badge/-VueJS-61b083"
      />

    </div>
    <div class="inner-content">
      <h3 class="heading"><b>About Me</b></h3>
      <p class="paragraph">
        👋 Hi! My name is Phakphum Artkaew, but you can call me Pluem, which is my Thai nickname. Sometimes, I also go by Peter for simplicity. Currently, I am pursuing a master's degree in Computer Engineering at New York University Tandon.
      </p>
      <p class="paragraph">
      I developed a fascination for the field of computer science during my high school years in Thailand. This interest was sparked by the thrill of translating my thoughts into code and eagerly anticipating the outcomes. My initial encounter with C++ programming in the 9th grade played a pivotal role in shaping this passion. 
      Eager to deepen my understanding, I participated in the 13th Thailand Olympiad in Informatics. My journey continued as I competed in a national exam, which led to earning a scholarship from Thailand's Ministry of Higher Education. This opportunity enabled me to further my studies in computer science in the United States.
      </p>
      <p class="paragraph">
      My primary focus in the U.S. is to deepen my understanding of computer science, particularly in the field of natural language processing, which captivates me the most. I am committed to making the most of this opportunity to expand my knowledge and skills.
      </p>
      <p class="paragraph">
      Upon completing my studies, I plan to return to Thailand. With the experience and insights gained abroad, I aim to contribute to the education of the younger generation in my home country. By sharing my journey and expertise, I hope to inspire and guide future talents in the field of computer science.
      </p>
    </div>
    <div class="inner-content">
      <h3 class="heading"><b>Résumé</b></h3>
      <a
        style="color: #ff5733"
        href="/files/Resume_Phakphum.pdf"
        class="paragraph"
        >Check out my résumé here.</a
      >
    </div>
  </div>
</template>

<style scoped>
.badge-grid {
  display: table;
  align-items: center;
  margin-top: 20px;
}

.badge {
  width: auto;
  height: 20px;
  border-radius: 0px;
  font-size: 12px;
  padding-right: 10px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
}

.self {
  width: 60%;
  height: auto;
  /* border-radius: 5px; */
}

.subtitle {
  font-size: 12px;
  color: gray;
}

.heading {
  padding-bottom: 5px;
}

.header {
  padding-top: 20px;
  padding-bottom: 20px;
}

.inner-content {
  padding-top: 30px;
}

h2,
h4,
h3 {
  padding: 0;
  margin: 0;
}
</style>
