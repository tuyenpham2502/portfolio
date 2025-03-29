"use client";

import React, { useState } from 'react';
import BucketList from '@/components/BucketList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BucketListItem {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    images?: string[];
}

const WishListItems = [
    // learning English
    { id: 0, title: "Learning English", description: "Improve my English skills." },
    // learning Go
    { id: 1, title: "Learning Go", description: "Master the Go programming language." },
    //learning Flutter
    { id: 3, title: "Learning Flutter", description: "Build beautiful mobile apps with Flutter." },
];

const ManifestPage = () => {
    const [bucketList, setBucketList] = useState<BucketListItem[]>([
        { id: 3, title: "Travel to Japan", description: "Explore the culture and cuisine.", completed: false },
        { id: 4, title: "Start a Blog", description: "Share my thoughts and experiences.", completed: false },
        { id: 5, title: "Run a Marathon", description: "Challenge myself physically.", completed: false },
        { id: 6, title: "Volunteer for a Cause", description: "Give back to the community.", completed: false },
    ]);

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-8 font-peachi">My Bucket List & Wish List</h1>

            { }
            <section className="mb-8">
                <Card className="bg-white dark:bg-[#09090B] text-gray-900 dark:text-gray-200">
                    <CardHeader>
                        <CardTitle> <h2 className="font-bold text-3xl tracking-tight mb-6 text-black dark:text-white ">
                            Bucket List
                        </h2></CardTitle>
                    </CardHeader>
                    <CardContent><BucketList bucketList={bucketList} setBucketList={setBucketList} />
                    </CardContent>
                </Card>
            </section>

            { }
            <section>
                <h2 className="text-2xl font-semibold mb-4">My Wish List</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {WishListItems.map((item) => (
                        <Card key={item.id} className="bg-white dark:bg-[#09090B] text-gray-900 dark:text-gray-200">
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='text-gray-900 dark:text-gray-200' >{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-8">
                The Bucket List section is inspired by <a href="https://theodorusclarence.com/bucket-list" className="underline">Theodorus Clarence</a>.
            </p>
        </div>
    );
};

export default ManifestPage;