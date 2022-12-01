import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:5173/course'
    }
  })
}

async function signOutOfGitHub() {
  const { error } = await supabase.auth.signOut()
}

const getUser = async () => {
  const myUser = await supabase.auth.getUser()
  console.log('supabase get user called')
  console.log({ myUser: myUser })
  return myUser
}

const getSession = async () => {
  const mySession = await supabase.auth.getSession()
  console.log('supabase get session called')
  console.log({ mySession: mySession })
  return mySession
}

export { supabase, signInWithGitHub, signOutOfGitHub, getUser, getSession }