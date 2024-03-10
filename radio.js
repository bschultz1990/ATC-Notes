document.addEventListener("DOMContentLoaded", (e) => {
  let title = document.querySelector('#title');
  let prelim_info = document.querySelector('#prelim-info');

  let dep_loc = document.querySelectorAll('.dep-loc');
  let callsign = document.querySelectorAll('.callsign');
  let ac_type = document.querySelectorAll('.ac-type');
  let dep_gate = document.querySelectorAll('.dep-gate');
  let dep_atis = document.querySelectorAll('.dep-atis');
  let arr_loc = document.querySelectorAll('.arr-loc');
  let arr_rwy = document.querySelectorAll('.arr-rwy');
  let rwy_dst = document.querySelectorAll('.rwy-dst');

  let form_dep_loc = document.querySelector("#form-dep-loc");
  let form_callsign = document.querySelector("#form-callsign");
  let form_ac_type = document.querySelector("#form-ac-type");
  let form_dep_gate = document.querySelector("#form-dep-gate");
  let form_dep_atis = document.querySelector("#form-dep-atis");
  let form_arr_loc = document.querySelector("#form-arr-loc");
  let form_arr_runway = document.querySelector("#form-arr-rwy");
  let form_arr_dist = document.querySelector("#form-arr-dst");

  let update_btn = document.querySelector("#update");

  title.addEventListener('click', (e) => {
    e.preventDefault();
    prelim_info.classList.toggle('invisible');
  })

  function helper(src, dest) {
    for (let i = 0; i < dest.length; i++) {
      dest[i].value = src.value;
    }
  }

  update_btn.addEventListener('click', (e) => {
    e.preventDefault();
    helper(form_dep_loc, dep_loc)
    helper(form_callsign, callsign)
    helper(form_ac_type, ac_type)
    helper(form_dep_gate, dep_gate)
    helper(form_dep_atis, dep_atis)
    helper(form_arr_loc, arr_loc)
    helper(form_arr_runway, arr_rwy)
    helper(form_arr_dist, rwy_dst)
  })

})