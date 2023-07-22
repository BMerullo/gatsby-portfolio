import React from "react"
import html from "../assets/images/skills/html-logo.png"
import css from "../assets/images/skills/css-logo.png"
import js from "../assets/images/skills/js-logo.jpeg"
import mongo from "../assets/images/skills/mongo-logo.jpg"
import mongoose from "../assets/images/skills/mongoose-logo.png"
import express from "../assets/images/skills/express-logo.png"
import node from "../assets/images/skills/node-logo.jpg"
import next from "../assets/images/skills/nextjs-logo.png"
import gatsby from "../assets/images/skills/gatsby-logo.png"
import react from "../assets/images/skills/react-logo.jpg"
import github from "../assets/images/github-img.png"
import wordpress from "../assets/images/skills/wordpress-logo.png"
import * as styles from "../assets/css/skills.module.css"

const SkillsSection = () => {
  return (
    <>
      <section className={styles.skillsContainer}>
        <img className={styles.skill} src={html} alt="html-logo" />
        <img className={styles.skill} src={css} alt="css-logo" />
        <img className={styles.skill} src={js} alt="js logo" />
        <img className={styles.skill} src={react} alt="react logo" />
      </section>
      <section className={styles.skillsContainer}>
        <img className={styles.skill} src={mongo} alt="" />
        <img className={styles.skill} src={mongoose} alt="" />
        <img className={styles.skill} src={express} alt="" />
        <img className={styles.skill} src={node} alt="node logo" />
      </section>
      <section className={styles.skillsContainer}>
        <img className={styles.skill} src={next} alt="next.js logo" />
        <img className={styles.skill} src={gatsby} alt="gatsby logo" />
        <img className={styles.skill} src={github} alt="github logo" />
        <img className={styles.skill} src={wordpress} alt="wordpress logo" />
      </section>
    </>
  )
}

export default SkillsSection
