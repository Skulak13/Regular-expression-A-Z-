function aliasGen(first, last){
  const firstAlias = first[0].toUpperCase();
  const lastAlias = last[0].toUpperCase();
  
  return /[A-Z]/.test(firstAlias) && /[A-Z]/.test(lastAlias) ? firstName[firstAlias] + " " + surname[lastAlias] : "Your name must start with a letter from A - Z.";
  // possible /^[a-z]/i.test(name) - i ignore letter size
}
