import { createContext, useContext, useEffect, useState } from 'react';
import { Session, createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient( supabaseUrl ,supabaseAnonKey );

interface AuthContextType {
    session: Session | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setSupabaseSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            setLoading(false);

            supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session);
            });
        };

        setSupabaseSession();
    }, []);

    return (
        <AuthContext.Provider value={{ session, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
