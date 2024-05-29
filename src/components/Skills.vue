<template>
  <div class="kura_tm_section" id="skills">
    <div class="kura_tm_skills">
      <div class="container">
        <div class="skills_inner">
          <div class="left">
            <div class="kura_tm_main_title light">
              <span>Skills</span>
              <h3>Programming Skills</h3>
            </div>
            <div class="text wow fadeInUp" data-wow-duration=".7s">
              <p>
                For more than 3 years learning cutting edge technologies and applying them in a real
                world scenario.
              </p>
            </div>
            <div class="dodo_progress wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".2s">
              <div class="progress_inner" data-value="95">
                <span
                  ><span class="label">HTML &amp; CSS</span><span class="number">95%</span></span
                >
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width: 95%"></div>
                  </div>
                </div>
              </div>
              <div class="progress_inner" data-value="80">
                <span><span class="label">JavaScript</span><span class="number">80%</span></span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              <div class="progress_inner" data-value="90">
                <span><span class="label">Vue JS</span><span class="number">80%</span></span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              <div class="progress_inner" data-value="90">
                <span><span class="label">Node JS</span><span class="number">65%</span></span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width: 65%"></div>
                  </div>
                </div>
              </div>
              <div class="progress_inner" data-value="90">
                <span><span class="label">Java</span><span class="number">70%</span></span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width: 70%"></div>
                  </div>
                </div>
              </div>
              <div class="progress_inner" data-value="90">
                <span><span class="label">Python</span><span class="number">45%</span></span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width: 45%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <!-- Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos -->
            <div
              class="my_video jarallax"
              data-speed="0"
              data-jarallax-video="https://www.youtube.com/watch?v=dU1xS07N-FA"
            />
            <div className="my_image jarallax" data-speed="0" data-img-url="/img/portfolio/2.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { activeSkillProgress, jarallaxContent } from '../utils/utils'

export default {
  name: 'Skills',
  mounted() {
    window.addEventListener('scroll', activeSkillProgress)
    jarallaxContent()
  }
}
</script>
