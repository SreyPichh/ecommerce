<template>
  <div class="l_filter__left">
    <h4 class="c_filter__title">Filter by type:</h4>
    <div class="c_tick__box">
      <div class="l_input__information">
        <label class="c_checkbox">
          <input type="checkbox" class="c_checkbox__input" name="all" />
          <span class="c_checkbox__item head_check">
            <svg class="c_icon icon_widget__check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0zM6.2,12.8L2.7,7.6L3.5,7l2.8,4.1L12,3.8l0.7,0.6L6.2,12.8z" />
            </svg>
            <svg id="target1" class="c_icon icon_widget__check__none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0z M12,9H4V7h8V9z" />
            </svg>
            <svg id="target2" class="c_icon icon_widget__check__out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
              <path d="M13,1c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2H13 M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0L13,0z" />
            </svg>
          </span>
        </label>
        <label class="l_label">painted</label>
      </div>
      <div class="l_input__information">
        <label class="c_checkbox">
          <input type="checkbox" class="c_checkbox__input" name="all" />
          <span class="c_checkbox__item head_check">
            <svg class="c_icon icon_widget__check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0zM6.2,12.8L2.7,7.6L3.5,7l2.8,4.1L12,3.8l0.7,0.6L6.2,12.8z" />
            </svg>
            <svg id="target1" class="c_icon icon_widget__check__none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0z M12,9H4V7h8V9z" />
            </svg>
            <svg id="target2" class="c_icon icon_widget__check__out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M13,1c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2H13 M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0L13,0z" />
            </svg>
          </span>
        </label>
        <label class="l_label">pattern</label>
      </div>
      <div class="l_input__information">
        <label class="c_checkbox">
          <input type="checkbox" class="c_checkbox__input" name="all" />
          <span class="c_checkbox__item head_check">
            <svg class="c_icon icon_widget__check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
              <path d="M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0zM6.2,12.8L2.7,7.6L3.5,7l2.8,4.1L12,3.8l0.7,0.6L6.2,12.8z" />
            </svg>
            <svg id="target1" class="c_icon icon_widget__check__none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0z M12,9H4V7h8V9z" />
            </svg>
            <svg id="target2" class="c_icon icon_widget__check__out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
              <path d="M13,1c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2H13 M13,0H3C1.3,0,0,1.3,0,3v10c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V3C16,1.3,14.7,0,13,0L13,0z"
              />
            </svg>
          </span>
        </label>
        <label class="l_label">gradient</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FilterSearch'
}
</script>
<style scoped>
.l_filter__left {
  width: 140px;
  height: 154px;
  background-color: #f4f2f3;
  padding: 20px;
  border-radius: 6px;
}
.c_filter__title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}
.c_tick__box {
  padding-top: 11px;
  padding-bottom: 11px;
  font-weight: bold;
  float: left;
}
.c_checkbox .c_checkbox__input {
  display: none;
}
.c_checkbox .c_checkbox__input {
  display: none;
}

.c_checkbox .c_checkbox__input:focus {
  outline: none;
}

.c_checkbox .c_checkbox__input:checked+.c_checkbox__item .icon_widget__check__out {
  display: none;
}

.c_checkbox .c_checkbox__input:checked+.c_checkbox__item .icon_widget__check {
  display: inline;
}

.c_checkbox .c_checkbox__input:checked+.c_checkbox__item .c_text {
  color: #393939;
}
.c_checkbox .c_checkbox__item {
  display: inline;
  align-items: center;
}

.c_checkbox .c_checkbox__item .icon_widget__check__out {
  display: inline;
}

.c_checkbox .c_checkbox__item .icon_widget__check,
.c_checkbox .c_checkbox__item .icon_widget__check__none {
  display: none;
}
.c_icon {
  width: 20px;
  height: 20px;
  margin-left: 8px;
}
.c_icon + .c_icon {
  margin-top: 5px;
}
.icon_widget__check {
  fill: #3e99fd;
  margin-top: 5px;
}
.l_label {
  font-size: 16px;
  margin: 5px 0px 0px 10px;
  font-weight: bold;
  color: #393933;
  position: absolute;
}
</style>