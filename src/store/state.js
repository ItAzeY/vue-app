let defailtCity = '上海'

try {
  if (localStorage.city) {
    defailtCity = localStorage.city
  }
} catch (e) { }
export default{
  city: defailtCity
}
