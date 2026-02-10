"use client"

function handleChange(event) {
  window.location.href = `/seasons/${event.target.value}`
}

export default function SeasonJumpMenu({ seasonNumber }) {
  return (
    <div className="season-jump-menu">
      <select name="season" onChange={handleChange} defaultValue={seasonNumber}>
        <option value="1">Season 1: Survivor: Borneo</option>
        <option value="2">Season 2: Survivor: The Australian Outback</option>
        <option value="3">Season 3: Survivor: Africa</option>
        <option value="4">Season 4: Survivor: Marquesas</option>
        <option value="5">Season 5: Survivor: Thailand</option>
        <option value="6">Season 6: Survivor: The Amazon</option>
        <option value="7">Season 7: Pearl Islands</option>
        <option value="8">Season 8: All-Stars</option>
        <option value="9">Season 9: Vanuatu</option>
        <option value="10">Season 10: Palau</option>
        <option value="11">Season 11: Guatemala</option>
        <option value="12">Season 12: Panama</option>
        <option value="13">Season 13: Cook Islands</option>
        <option value="14">Season 14: Fiji</option>
        <option value="15">Season 15: China</option>
        <option value="16">Season 16: Survivor: Micronesia – Fans vs. Favorites</option>
        <option value="17">Season 17: Survivor: Gabon</option>
        <option value="18">Season 18: Survivor: Tocantins</option>
        <option value="19">Season 19: Survivor: Samoa</option>
        <option value="20">Season 20: Survivor: Heroes vs. Villains</option>
        <option value="21">Season 21: Survivor: Nicaragua</option>
        <option value="22">Season 22: Survivor: Redemption Island</option>
        <option value="23">Season 23: Survivor: South Pacific</option>
        <option value="24">Season 24: Survivor: One World</option>
        <option value="25">Season 25: Survivor: Philippines</option>
        <option value="26">Season 26: Survivor: Caramoan – Fans vs. Favorites</option>
        <option value="27">Season 27: Survivor: Blood vs. Water</option>
        <option value="28">Season 28: Survivor: Cagayan – Brawn vs. Brains vs. Beauty</option>
        <option value="29">Season 29: Survivor: San Juan del Sur – Blood vs. Water</option>
        <option value="30">Season 30: Survivor: Worlds Apart</option>
        <option value="31">Season 31: Survivor: Cambodia – Second Chance</option>
        <option value="32">Season 32: Survivor: Kaôh Rōng – Brawn vs. Brains vs. Beauty</option>
        <option value="33">Season 33: Survivor: Millennials vs. Gen X</option>
        <option value="34">Season 34: Survivor: Game Changers</option>
        <option value="35">Season 35: Survivor: Heroes vs. Healers vs. Hustlers</option>
        <option value="36">Season 36: Survivor: Ghost Island</option>
        <option value="37">Season 37: Survivor: David vs. Goliath</option>
        <option value="38">Season 38: Survivor: Edge of Extinction</option>
        <option value="39">Season 39: Survivor: Island of the Idols</option>
        <option value="40">Season 40: Survivor: Winners at War</option>
        <option value="41">Season 41: Survivor 41</option>
        <option value="42">Season 42: Survivor 42</option>
        <option value="43">Season 43: Survivor 43</option>
        <option value="44">Season 44: Survivor 44</option>
        <option value="45">Season 45: Survivor 45</option>
        <option value="46">Season 46: Survivor 46</option>
        <option value="47">Season 47: Survivor 47</option>
        <option value="48">Season 48: Survivor 48</option>
        <option value="49">Season 49: Survivor 49</option>
      </select>
    </div>
  )
}