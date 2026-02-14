import  {createClient} from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://gpndoehovtzykhdflefd.supabase.co'
const supabaseKey='sb_publishable_Yo26Xe_smmBBBQmjjq_erg_jE9CIla0'


const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase