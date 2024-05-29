<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="kura_tm_section" id="contact">
    <div class="kura_tm_contact">
      <div class="container">
        <div class="kura_tm_main_title">
          <span>Contact</span>
          <h3>Get in Touch</h3>
        </div>
        <div class="contact_inner">
          <div class="left wow fadeInUp" data-wow-duration=".7s">
            <div class="text">
              <p>Please fill out the form on this section to contact with me.</p>
            </div>
            <div class="short">
              <ul>
                <li>
                  <div class="list_inner">
                    <!-- If you want to change or add any svg icons you can download here for free www.flaticon.com -->
                    <img class="svg" src="img/svg/placeholder.svg" alt="" />
                    <span>540 Memorial Dr, Cambridge, USA</span>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <img class="svg" src="img/svg/phone.svg" alt="" />
                    <span>+1 401-302-8412</span>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <img class="svg" src="img/svg/mail.svg" alt="" />
                    <span>dot@cooweb.co</span>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <img class="svg" src="img/svg/globe.svg" alt="" />
                    <span>https://david-web-dev.web.app</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="right wow fadeInUp" data-wow-duration=".7s">
            <div class="fields">
              <form
                action="/"
                method="post"
                class="contact_form"
                id="contact_form"
                autocomplete="off"
                @submit.prevent=""
              >
                <div
                  class="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                ></div>
                <div class="empty_notice">
                  <span>Please Fill Required Fields</span>
                </div>
                <div class="first">
                  <ul>
                    <li>
                      <input id="name" type="text" placeholder="Name" />
                    </li>
                    <li>
                      <input id="email" type="text" placeholder="Email" />
                    </li>
                  </ul>
                </div>
                <div class="last">
                  <textarea id="message" placeholder="Message"></textarea>
                </div>
                <div class="kura_tm_button" data-position="left">
                  <a id="send_message" href="#"
                    ><span>Submit</span><img class="svg" src="img/svg/right-arrow.svg" alt=""
                  /></a>
                </div>

                <!-- If you want to change mail address to yours, please open modal.php and go to line 4 -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
