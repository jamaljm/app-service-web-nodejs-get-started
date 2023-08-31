var express = require('express');
var router = express.Router();
const { createClient } = require('@supabase/supabase-js');

/* GET home page. */
router.get('/',async function(req, res, next) {
  const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: true,
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
};

// Create a Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, options);
const { data, error } = await supabase
        .from('users')
        .select('id');
var server = http.createServer(app);
console.log(data);

});

module.exports = router;
