"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function WaitlistModal({ isOpen, setIsOpen }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        console.log("Saving user data:", formData);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after 2 seconds and close
        setTimeout(() => {
            setIsOpen(false);
            setIsSuccess(false);
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px] bg-white rounded-2xl border-none shadow-2xl p-8">
                {!isSuccess ? (
                    <>
                        <DialogHeader className="mb-6">
                            <DialogTitle className="text-2xl font-bold text-[#1D1D1F]">
                                Join our waitlist
                            </DialogTitle>
                            <DialogDescription className="text-[#86868B] text-base mt-2">
                                Be the first to experience the future of hair care tracking.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-medium text-[#1D1D1F]">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Jane Doe"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="rounded-xl border-[#E5E5E7] focus:ring-2 focus:ring-[#632B14] transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-[#1D1D1F]">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="jane@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="rounded-xl border-[#E5E5E7] focus:ring-2 focus:ring-[#632B14] transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium text-[#1D1D1F]">
                                    Message (Optional)
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us why you're excited!"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="rounded-xl border-[#E5E5E7] focus:ring-2 focus:ring-[#632B14] transition-all min-h-[100px]"
                                />
                            </div>
                            <DialogFooter className="pt-2">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#632B14] hover:bg-[#4A2010] text-white py-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    {isSubmitting ? "Saving..." : "Join Now"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </>
                ) : (
                    <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1D1D1F]">You're on the list!</h3>
                        <p className="text-[#86868B]">We'll reach out to you soon with updates.</p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
