"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '@/authcontext/authContext';

const withAuth = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const { session, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !session) {
                router.replace('/signin');  // Redirect to signin page if not logged in
            }
        }, [loading, session, router]);

        // Render nothing until loading is finished or the session is available
        if (loading || !session) {
            return null;  // You might want to render a loader here instead of null
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
