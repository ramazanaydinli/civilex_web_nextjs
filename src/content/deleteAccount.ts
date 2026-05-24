// src/content/deleteAccount.ts

export const deleteAccountContent = {
  // 1. PENTATHLON - HESAP SİLME (ACCOUNT DELETION)
  pentathlonAccount: {
    en: {
      title: "Delete Account",
      description: "To permanently delete your Pentathlon Exercise Tracker account, please fill out the form below.",
      warning: "WARNING: This action is irreversible. Your account will be permanently removed.",
      loading: "Loading form..."
    },
    tr: {
      title: "Hesap Silme",
      description: "Pentatlon Egzersiz Takibi hesabınızı kalıcı olarak silmek için lütfen aşağıdaki formu doldurunuz.",
      warning: "UYARI: Bu işlem geri alınamaz. Hesabınız kalıcı olarak silinecektir.",
      loading: "Form yükleniyor..."
    }
  },

  // 2. PENTATHLON - VERİ SİLME (DATA DELETION)
  pentathlonData: {
    en: {
      title: "Delete Data Request",
      description: "To request the deletion of your personal data (scores, history, logs) associated with Pentathlon Exercise Tracker, please use the form below.",
      warning: "WARNING: Deleted data cannot be recovered.",
      loading: "Loading form..."
    },
    tr: {
      title: "Veri Silme Talebi",
      description: "Pentatlon Egzersiz Takibi ile ilişkili kişisel verilerinizin (skorlar, geçmiş, kayıtlar) silinmesini talep etmek için lütfen aşağıdaki formu kullanın.",
      warning: "UYARI: Silinen veriler geri getirilemez.",
      loading: "Form yükleniyor..."
    }
  },

  // 3. ATIK - HESAP SİLME
  atikAccount: {
    en: {
      title: "Delete Atik Account",
      description: "To permanently delete your Atik account and all associated school/progress data, please fill out the form below.",
      warning: "WARNING: This action is irreversible. Your account and all achievements will be permanently removed.",
      loading: "Loading form..."
    },
    tr: {
      title: "Atik Hesabını Sil",
      description: "Atik hesabınızı ve tüm okul/ilerleme verilerinizi kalıcı olarak silmek için lütfen aşağıdaki formu doldurunuz.",
      warning: "UYARI: Bu işlem geri alınamaz. Hesabınız ve tüm başarımlarınız kalıcı olarak silinecektir.",
      loading: "Form yükleniyor..."
    }
  },

  // 4. ATIK - VERİ SİLME (hesap silmeden — Play Console commitment, 2026-05-24)
  // Atik kullanıcısı sadece skor/okul bilgisini sıfırlamak isterse bu sayfa.
  // Hesap + Premium subscription + parentalConsent audit trail KORUNUR.
  // Tam silme için /atik/delete-account ayrı.
  atikData: {
    en: {
      title: "Reset My Atik Data",
      description: "Reset your scores and school info without deleting your account. Your account stays active and your Premium subscription continues — only game progress and school details are removed.",
      warning: "NOTE: Scores and school info cannot be recovered once deleted. Your account, nickname, team and Premium subscription stay intact.",
      loading: "Loading form..."
    },
    tr: {
      title: "Atik Verilerimi Sıfırla",
      description: "Hesabını silmeden sadece skor ve okul bilgini sıfırlamak için aşağıdaki formu doldur. Hesabın aktif kalır, Premium aboneliğin devam eder — yalnız oyun ilerlemen ve okul bilgilerin silinir.",
      warning: "UYARI: Skor ve okul bilgisi silindikten sonra geri getirilemez. Hesabın, takma adın, takımın ve Premium aboneliğin aynen kalır.",
      loading: "Form yükleniyor..."
    }
  }
};