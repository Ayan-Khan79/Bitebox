import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reserve() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 2000);
  };

  const handleNext = () => {
    if (step === 1 && (!form.name || !form.email || !form.phone)) {
      return showError("Please fill all fields");
    }
    if (step === 2 && (!form.date || !form.time)) {
      return showError("Select a date and time");
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    setShowToast(true);

    setTimeout(() => setShowToast(false), 2000);

    // Reset
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      notes: "",
    });

    setStep(1);
  };

  return (
    <div className="relative text-white">

      {/* ✅ Background Video */}
      <video
        src="/videos/ReservationVideo.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto px-6 py-28 text-center">
        <h1 className="font-display text-5xl mb-6">
          Make a Reservation
        </h1>
        <p className="text-gray-300 mb-8">
          Experience excellent dining — reserve your table today.
        </p>

        {/* FORM WRAPPER */}
        <motion.div
          className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AnimatePresence mode="wait">
            {/* -------- STEP 1 -------- */}
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={error ? "animate-shake" : ""}
              >
                <div className="grid gap-4">
                  <input
                    className="bg-transparent border border-white/10 p-3 rounded"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  <input
                    className="bg-transparent border border-white/10 p-3 rounded"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <input
                    className="bg-transparent border border-white/10 p-3 rounded"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />

                  {error && (
                    <p className="text-red-400 text-sm mt-1">{error}</p>
                  )}

                  <button
                    className="btn-oval mx-auto mt-4"
                    onClick={handleNext}
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            )}

            {/* -------- STEP 2 -------- */}
            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={error ? "animate-shake" : ""}
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="bg-transparent border border-white/10 p-3 rounded"
                    type="date"
                    value={form.date}
                    onChange={(e) =>
                      setForm({ ...form, date: e.target.value })
                    }
                  />
                  <input
                    className="bg-transparent border border-white/10 p-3 rounded"
                    type="time"
                    value={form.time}
                    onChange={(e) =>
                      setForm({ ...form, time: e.target.value })
                    }
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm mt-1">{error}</p>
                )}

                <button
                  className="btn-oval mx-auto mt-4"
                  onClick={handleNext}
                >
                  Next →
                </button>

                <p
                  className="text-gray-300 text-sm mt-2 underline cursor-pointer"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </p>
              </motion.div>
            )}

            {/* -------- STEP 3 -------- */}
            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <textarea
                  className="bg-transparent border border-white/10 p-3 rounded h-28 w-full"
                  placeholder="Special requests"
                  value={form.notes}
                  onChange={(e) =>
                    setForm({ ...form, notes: e.target.value })
                  }
                />

                <button
                  className="btn-oval mx-auto mt-4"
                  onClick={handleSubmit}
                >
                  Confirm Reservation ✅
                </button>

                <p
                  className="text-gray-300 text-sm mt-2 underline cursor-pointer"
                  onClick={() => setStep(2)}
                >
                  ← Back
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ✅ TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 px-6 py-3 rounded-full"
          >
            ✅ Reservation request sent!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
